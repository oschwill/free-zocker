import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import HeaderInputBox from '../header/HeaderInputBox';
import { useContext } from 'react';
import { AutoCompleteContext } from '../../context/Context';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Input = styled('input')(() => ({
  width: 230,
  marginRight: '25px',
  borderRadius: '12px',
  padding: '5px',
  backgroundColor: '#375470',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 'bold',
}));

const Listbox = styled('ul')(() => ({
  width: 230,
  margin: 0,
  padding: '5px',
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#102130',
  overflow: 'auto',
  maxHeight: 260,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#FF4654',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#FF4654',
    color: 'white',
  },
}));

export default function UseAutocomplete() {
  const [autoCompleteData, setAutoCompleteData] = useState(null);
  useContext(AutoCompleteContext).then((_data) => {
    if (!autoCompleteData) {
      setAutoCompleteData(_data);
    }
  });

  const handlePressEnter = (e) => {
    console.log(e);
  };

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      id: 'use-autocomplete-demo',
      options: autoCompleteData,
      getOptionLabel: (option) => option.title,
    });

  return (
    <div>
      <div {...getRootProps()}>
        <HeaderInputBox>
          <Input {...getInputProps()} />
        </HeaderInputBox>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li
              key={crypto.randomUUID()}
              {...getOptionProps({ option, index })}
              className="pb-2 text-[2rem] border-b-2"
              onKeyDown={() => handlePressEnter(option.id)}
            >
              <Link to={`/details/${option.id}`}>{option.title}</Link>
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}
