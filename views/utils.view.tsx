import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/utils.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Expander, Loader, Notification, Badge } from '../components/utils';
import Icon from '@mdi/react';
import { mdiMail } from '@mdi/js';

export const UtilsView = () => {
  const description = `There are a bunch of components that can help out in different situations.`;

  const example = (
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
                <Icon path={mdiMail} size={1} />
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

  const options = (
    <>
      <List padding>
        <div>
          <h4>Notifications</h4>
          <List padding lines>
            <div>children</div>
            <ListItem title="type*">
              &apos;success&apos;|&apos;info&apos;|&apos;warning&apos;|&apos;error&apos;
            </ListItem>
            <ListItem title="message">string</ListItem>
          </List>
        </div>
        <div>
          <h4>Loader</h4>
          <List padding lines>
            <ListItem title="size">&apos;small&apos;</ListItem>
            <ListItem title="light">boolean</ListItem>
            <ListItem title="fillPage">boolean</ListItem>
          </List>
        </div>
        <div>
          <h4>Expander</h4>
          <List padding lines>
            <div>children*</div>
            <ListItem title="title*">string</ListItem>
            <ListItem title="expanded">boolean</ListItem>
          </List>
        </div>
        <div>
          <h4>Badge</h4>
          <List padding lines>
            <div>children*</div>
            <ListItem title="value*">string|number</ListItem>
          </List>
        </div>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Utils" description={description} example={example} code={txt} options={options} />
  );
};
