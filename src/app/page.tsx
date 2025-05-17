import { Button ,  Dropdown, DropdownItem } from 'flowbite-react';

export default function Page() {
  return (<>
  <h1>Hello Next.js!</h1>
  <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  </>)
}