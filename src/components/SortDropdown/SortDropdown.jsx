// import { Dropdown } from 'react-bootstrap';
import './SortDropdown.css'
import { Dropdown } from 'reactjs-dropdown-component';

function SortDropdown({selected, onSortChange}) {
    const options = [
        {
          label: 'First Name',
          value: 'fname',
        },
        {
          label: 'Last Name',
          value: 'lname',
        },
        {
          label: 'Age',
          value: 'age',
        }
      ];
    return (
        <Dropdown
            name="sort"
            title={selected}
            list={options}
            onChange={(item, name) => onSortChange(item.label)}
            styles={{
                wrapper: { fontSize: '1em', width: '100%' },
                headerTitle: { marginLeft: '10px' },
                headerArrowUpIcon: { marginRight: '10px' },
                headerArrowDownIcon: { marginRight: '10px' },
                listItem: { fontSize: '1em', fontWeight: 'normal' },
                scrollList: { overflowY: 'hidden', padding: '0' }
            }}
        />
        // <Dropdown onSelect = {(eventkey, event) => onSortChange(event.target.textContent)}>
        //     <Dropdown.Toggle id="dropdown-btn">
        //         {selected}
        //     </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //         <Dropdown.Item>First Name</Dropdown.Item>
        //         <Dropdown.Item>Last Name</Dropdown.Item>
        //         <Dropdown.Item>Age</Dropdown.Item>
        //     </Dropdown.Menu>
            
        // </Dropdown>
    );
}

export default SortDropdown;