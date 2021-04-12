import { Dropdown } from 'react-bootstrap';

function SortDropdown(props) {

    return (
        <Dropdown  id="sort-dropdown">
            <Dropdown.Toggle>
                Dropdown Button
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