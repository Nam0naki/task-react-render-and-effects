import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const { sourceId } = props;
  const [lastMessage, setLastMessage] = useState<string | number>(-1);

  useEffect(() => {
    setLastMessage(-1);

    const handleMessage = (message: string | number) => {
      setLastMessage(message);
    };

    subscribe(sourceId, handleMessage);

    return () => {
      unsubscribe(sourceId, handleMessage);
    };
  }, [sourceId]);

  return (
    <div>
      {sourceId}: {lastMessage}
    </div>
  );
}
