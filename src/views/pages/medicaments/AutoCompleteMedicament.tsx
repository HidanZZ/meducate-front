import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { search, setSearchType } from 'src/store/apps/medicament/components/search';
import { Medicament } from 'src/types/apps/medicament';
import router from 'next/router';
import SwitchWithLabels from './SwitchesBasic';

const AutoCompleteMedicament = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const {
    medicaments,
    searchType,
    loading,
  }: {
    medicaments: Array<Medicament>;
    status: string;
    searchType: 'name' | 'molecule';
    loading: boolean;
  } = useSelector((state: any) => state.medicament.search);

  useEffect(() => {
    if (searchValue.length > 2) {
      dispatch(search({ nom: searchValue, searchType }));
    }
  }, [dispatch, searchValue, searchType]);

  const handleOptionClick = (obj: Medicament) => {
    setSearchValue('');

    //setOpenDialog(false);

    // Navigate to the search result page using the selected medicament's ID
    router.push('/third-page/search-result/' + obj._id);
  };

  const handleSwitchToggle = (newValue: 'medicament' | 'molecule') => {
    // Dispatch the action with the selected search type
    dispatch(setSearchType(newValue));
  };

  return (
    <Autocomplete
      open={open}
      options={medicaments}
      loading={loading}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      id='autocomplete-medicament'
      getOptionLabel={(option: Medicament) => option.nomDuMedicament}
      inputValue={searchValue}
      onInputChange={(event, newValue) => {
        setSearchValue(newValue);
      }}
      onChange={(event, newValue) => {
        if (newValue) {
          setSearchValue(newValue.nomDuMedicament || ''); // Update the input value when an option is selected
          handleOptionClick(newValue as Medicament); // Handle the selection
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search Medicaments'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <div style={{ display: 'flex' }}>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                <SwitchWithLabels onToggle={handleSwitchToggle} />
              </div>
            ),
            style: {
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            },
          }}
        />
      )}
    />
  );
};

export default AutoCompleteMedicament;
