import store from 'store2';
import config from 'config';
import { IEntity } from 'modules/auth/types';

export const getSession = (): IEntity.User => store.get(config.api.sessionKEY) || {};

export const clearSession = () => store.remove(config.api.sessionKEY)!;

export const setSession = (tokens: IEntity.User) => store.set(config.api.sessionKEY, tokens);
