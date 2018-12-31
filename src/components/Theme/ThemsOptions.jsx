import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ThemeOptions extends Component {
    render() {
        const { theme, dropdownOpen } = this.props.state;
        const themeClass = theme ? theme.toLowerCase() : 'secondary';

        return (
        <div id="theme" className="d-flex flex-wrap justify-content-center align-items-center align-content-center">

            <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{theme || 'Default'}</span>

            <ButtonDropdown isOpen={dropdownOpen} toggle={this.props.toggleDropdown}>
            <Button id="caret" color={themeClass}>{theme || 'Custom'} Theme</Button>
            <DropdownToggle caret size="lg" color={themeClass} />
            <DropdownMenu>
                <DropdownItem onClick={e => this.props.chooseTheme('Primary', e)}>Primary Theme</DropdownItem>
                <DropdownItem onClick={e => this.props.chooseTheme('Danger', e)}>Danger Theme</DropdownItem>
                <DropdownItem onClick={e => this.props.chooseTheme('Success', e)}>Success Theme</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.resetTheme}>Default Theme</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
        </div>
        );
    }
}

export default ThemeOptions;
