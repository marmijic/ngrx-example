import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export function debugMetaReducer(
  reducer: ActionReducer<object>
): ActionReducer<object> {
  return function(oldState: object, action: Action): object {
    const newState = reducer(oldState, action);
    console.groupCollapsed(
      `%c NgRx store update by '${action.type}'`,
      'color: #e2001a'
    );
    console.log('Old state: ', oldState);
    console.log('Action: ', action);
    console.log('New state: ', newState);
    console.groupEnd();

    return newState;
  };
}

export const metaReducers: MetaReducer<object>[] = !environment.production
  ? [debugMetaReducer, storeFreeze]
  : [];
