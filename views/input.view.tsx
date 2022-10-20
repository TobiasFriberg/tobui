import React, { useState } from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/input.example';
import { List, ListItem } from '../components/list';
import { InputField, SearchField, Select } from '../components/form';
import { Lock } from 'react-feather';
import { Loader } from '../components/utils';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';

let timer: NodeJS.Timeout;
const searchable = ['John', 'Marie', 'Steve', 'Julie'];

export const InputView = () => {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [validateValue, setValidateValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string[]>(searchable);

  const description = `Inputs comes in many flavours and variants, use them as you like.`;

  const validator = (value: string) => {
    return value != '' && value === 'Hello';
  };

  const handleSearch = (searchValue: string) => {
    clearTimeout(timer);
    if (!searchValue) {
      setSearchResult(searchable);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const foundItems = searchable.filter((item) => item.indexOf(searchValue) >= 0);
    timer = setTimeout(() => {
      setSearchResult(foundItems);
      setIsSearching(false);
    }, 1200);
  };

  const renderSearchResult = () => {
    if (isSearching) {
      return (
        <div>
          Searching... <Loader size="small" />
        </div>
      );
    }
    return searchResult.map((item, i) => <div key={i}>{item}</div>);
  };

  const example = (
    <List>
      <div>
        <InputField
          label="Write something"
          placeholder="this is a placeholder"
          onChange={(newValue) => setValue(newValue)}
          value={value}
        />
      </div>
      <div>
        <InputField
          label="A multiline input"
          placeholder="Write some more text here"
          multiline
          onChange={(newValue) => setValue(newValue)}
          value={value}
        />
      </div>
      <div>
        <InputField
          icon={<Lock />}
          type="password"
          label="Password field"
          placeholder="Schh.. it's a secret"
          onChange={(newValue) => setPassword(newValue)}
          value={password}
        />
      </div>
      <div>
        <InputField
          label="Validation"
          placeholder="Write Hello"
          onChange={(newValue) => setValidateValue(newValue)}
          validator={(e) => validator(e)}
          value={validateValue}
        />
      </div>
      <div>
        <SearchField label="Filter" placeholder="Search something" handleSearch={(e) => handleSearch(e)} />
        <List padding lines>
          {renderSearchResult()}
        </List>
      </div>
      <div>
        <Select
          label="Select something"
          items={[
            { label: 'Item 01', value: '01' },
            { label: 'Item 02', value: '02' },
          ]}
          onChange={() => {}}
        />
      </div>
    </List>
  );

  const options = (
    <>
      <List padding lines>
        <ListItem title="value*">string</ListItem>
        <ListItem title="onChange*">function</ListItem>
        <ListItem title="label">string</ListItem>
        <ListItem title="placeholder">string</ListItem>
        <ListItem title="type">string</ListItem>
        <ListItem title="multiline">boolean</ListItem>
        <ListItem title="rows">number</ListItem>
        <ListItem title="icon">ReactElement</ListItem>
        <ListItem title="iconPosition">&apos;left&apos; | &apos;right&apos;</ListItem>
        <ListItem title="width">string</ListItem>
        <ListItem title="className">string</ListItem>
        <ListItem title="validator">function</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Inputs" description={description} example={example} code={txt} options={options} />
  );
};
