export interface StoreShape {
 
    value: ServerNotification[];
}

export const initialState: StoreShape = { value: []}

export interface ModelShape {
    
    command: ServerNotification;
}



export interface ValueToastNotificationType {
    type: ServerNotificationTypes;
    value: string;
  }


export interface ValueToastNotificationStoreShape {
    value: ValueToastNotificationType[]
  }
  export const initialStateValueToastNotification: ValueToastNotificationStoreShape = {
        value: []
  }


export interface ToastNotificationPayload {
    type: ServerNotificationTypes
    value: ValueToastNotificationType[]
  }

export interface ToastNotificationAction {
    type: string,
    payload: ToastNotificationPayload,
  }
  