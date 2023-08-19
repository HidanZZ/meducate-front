import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const SwitchWithLabels = () => {
  const [currentLabel, setCurrentLabel] = useState('Medicament');

  const handleSwitchToggle = () => {
    setCurrentLabel(currentLabel === 'Medicament' ? 'Molecule' : 'Medicament');
  };

  return (
    <FormControlLabel
      label={currentLabel}
      labelPlacement="start" // This sets the label to appear on the left side of the switch
      control={<Switch checked={currentLabel === 'Molecule'} onChange={handleSwitchToggle} />}
    />
  );
};

export default SwitchWithLabels;
