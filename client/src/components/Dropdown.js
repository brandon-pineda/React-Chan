import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const Dropdown = () => (
    <DropdownButton title='categories' id='board-category-dropdown'>
        <MenuItem eventKey="1">Adult (NSFW)</MenuItem>
        <MenuItem eventKey="2">Creative</MenuItem>
        <MenuItem eventKey="3">Interests</MenuItem>
        <MenuItem eventKey="4">Japanese Culture</MenuItem>
        <MenuItem eventKey="4">Misc. (NSFW)</MenuItem>
        <MenuItem eventKey="4">Other</MenuItem>
        <MenuItem eventKey="4">Video Games</MenuItem>
    </DropdownButton>
)

export default Dropdown;
