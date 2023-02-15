import React from 'react';
import { Mail } from 'react-feather';
import { List, Notification, Expander, Loader, Badge } from 'tobui';

export const UtilsExample = () => {
  return (
    <>
      <List padding>
        <div>
          <Notification type="success" message="Successful message" />
          <Notification type="info" message="Informational message" />
          <Notification type="warning" message="Warning message" />
          <Notification type="error" message="Error message" />
        </div>
        <div>
          <List padding>
            <Loader />
            <Loader size="small" />
          </List>
        </div>
        <div>
          <Expander title="Toggle expander">This is the expander content.</Expander>
        </div>
        <div>
          <List padding>
            <div>
              <Badge value="2">
                <Mail />
              </Badge>
            </div>
            <div>
              <Badge value="5">Everything can have a badge.</Badge>
            </div>
          </List>
        </div>
      </List>
    </>
  );
};
