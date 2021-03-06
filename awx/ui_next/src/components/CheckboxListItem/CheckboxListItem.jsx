import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCheck,
  Radio,
} from '@patternfly/react-core';
import DataListCell from '../DataListCell';

const Label = styled.label`
  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
  `}
`;

const CheckboxListItem = ({
  isDisabled = false,
  isRadio = false,
  isSelected = false,
  itemId,
  label,
  name,
  onDeselect,
  onSelect,
}) => {
  const CheckboxRadio = isRadio ? Radio : DataListCheck;

  return (
    <DataListItem
      key={itemId}
      aria-labelledby={`check-action-item-${itemId}`}
      id={`${itemId}`}
    >
      <DataListItemRow>
        <CheckboxRadio
          aria-label={`check-action-item-${itemId}`}
          aria-labelledby={`check-action-item-${itemId}`}
          checked={isSelected}
          isDisabled={isDisabled}
          id={`selected-${itemId}`}
          isChecked={isSelected}
          name={name}
          onChange={isSelected ? onDeselect : onSelect}
          value={itemId}
        />
        <DataListItemCells
          dataListCells={[
            <DataListCell key="name">
              <Label
                id={`check-action-item-${itemId}`}
                htmlFor={`selected-${itemId}`}
                className="check-action-item"
                isDisabled={isDisabled}
              >
                <b>{label}</b>
              </Label>
            </DataListCell>,
          ]}
        />
      </DataListItemRow>
    </DataListItem>
  );
};

CheckboxListItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  itemId: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeselect: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CheckboxListItem;
