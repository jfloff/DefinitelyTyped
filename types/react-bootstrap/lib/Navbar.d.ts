import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import * as NavbarBrand from './NavbarBrand';
import * as NavbarCollapse from './NavbarCollapse';
import * as NavbarHeader from './NavbarHeader';
import * as NavbarToggle from './NavbarToggle';

declare namespace Navbar {
    export interface NavbarProps extends React.HTMLProps<Navbar> {
        brand?: any; // TODO: Add more specific type
        bsSize?: Sizes;
        bsStyle?: string;
        collapseOnSelect?: boolean;
        componentClass?: React.ReactType;
        defaultNavExpanded?: boolean;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        navExpanded?: boolean;
        onToggle?: Function;
        staticTop?: boolean;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
}
declare class Navbar extends React.Component<Navbar.NavbarProps> {
    static Brand: typeof NavbarBrand;
    static Collapse: typeof NavbarCollapse;
    static Header: typeof NavbarHeader;
    static Toggle: typeof NavbarToggle;
    static Link: typeof NavbarLink;
    static Text: typeof NavbarText;
    static Form: typeof NavbarForm;
}
export = Navbar;

/**
 * the classes below aren't present in lib/
 */

interface NavbarLinkProps extends React.HTMLProps<NavbarLink> {
  href: string;
  onClick?: React.MouseEventHandler<any>;
}
declare class NavbarLink extends React.Component<NavbarLinkProps> { }

interface NavbarTextProps extends React.HTMLProps<NavbarText> {
  pullRight?: boolean;
}
declare class NavbarText extends React.Component<NavbarTextProps> { }

interface NavbarFormProps extends React.HTMLProps<NavbarForm> {
  componentClass?: React.ReactType;
  pullRight?: boolean;
}
declare class NavbarForm extends React.Component<NavbarFormProps> { }
