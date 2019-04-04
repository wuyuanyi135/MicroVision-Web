import {Message} from 'google-protobuf';

export function AsObject2Message<T extends Message>(obj: object, outMsg: T) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const PascalName = 'set' + key.charAt(0).toUpperCase() + key.slice(1);
    const setter = outMsg[PascalName];
    if (!setter) {
      throw Error(`${PascalName} does not exist on the message`);
    }

    setter.bind(outMsg)(obj[key]);
  }
}
