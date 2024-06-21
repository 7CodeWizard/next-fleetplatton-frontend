import React from 'react';
import Button from '../atoms/Button';

type Props = {
  onSearch: (value: string) => void;
};

const Search = ({ onSearch }: Props) => {
  return (
    <div>
      <Button
        onClick={() => {
          onSearch('');
        }}>
        Search
      </Button>
    </div>
  );
};

export default Search;
