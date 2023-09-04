import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

type SwitchWithLabelsProps = {
  onToggle: (newValue: 'medicament' | 'molecule') => void;
};

const SwitchWithLabels: React.FC<SwitchWithLabelsProps> = ({ onToggle }) => {
  const [currentLabel, setCurrentLabel] = useState('Medicament');

  const handleSwitchToggle = () => {
    const newLabel = currentLabel === 'Medicament' ? 'Molecule' : 'Medicament';
    setCurrentLabel(newLabel);
    onToggle(newLabel.toLowerCase() as 'medicament' | 'molecule');
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
