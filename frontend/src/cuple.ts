import { createClient } from '@cuple/client';

import { Routes } from '../../backend/src/index';

export const client = createClient<Routes>({
  path: '/api/rpc',
});
