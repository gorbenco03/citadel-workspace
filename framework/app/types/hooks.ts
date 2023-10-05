import { MutationHook } from '@common/types/hooks';

export interface ApiHooks {
  c2s: {
    useRegister: MutationHook;
    useConnect: MutationHook;
    useDisconnect: MutationHook;
    useGetAccountInfo: MutationHook;
    useGetAllPeers: MutationHook;
  };
  p2p: {
    useRegister: MutationHook;
  };
  useMessage: MutationHook;
}
