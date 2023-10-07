'use client';

import { useParams } from 'next/navigation';

import { useOrigin } from '@/hooks/use-origin';
import { ApiAlert } from '@/components/ui/api-alert';

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({ entityName, entityIdName }) => {
  const origin = useOrigin();
  const params = useParams();

  const baseUrl = `${origin}/api/@{params.storeId}`;

  return (
    <>
      <ApiAlert variant="public" title="GET" description={`${baseUrl}/${entityName}`} />
      <ApiAlert
        variant="public"
        title="GET"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert variant="admin" title="POST" description={`${baseUrl}/${entityName}`} />
      <ApiAlert
        variant="admin"
        title="PATCH"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        variant="admin"
        title="DELETE"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
