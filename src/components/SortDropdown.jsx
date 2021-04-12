import { Dropdown } from 'react-bootstrap';

function SortDropdown({selected, onSortChange}) {
    return (
        <Dropdown id="sort-dropdown" onSelect = {(eventkey, event) => onSortChange(event.target.textContent)}>
            <Dropdown.Toggle id="dropdown-toggle">
                {selected}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>First Name</Dropdown.Item>
                <Dropdown.Item>Last Name</Dropdown.Item>
                <Dropdown.Item>Age</Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>
    );
}

export default SortDropdown;