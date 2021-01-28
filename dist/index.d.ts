import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getPropsWithLayout, propTypes, default as Layout } from './Layout';
declare const componentPropTypes: {
    m: PropTypes.Requireable<import("nano-css").TLength>;
    mb: PropTypes.Requireable<import("nano-css").TLength>;
    mt: PropTypes.Requireable<import("nano-css").TLength>;
    mr: PropTypes.Requireable<import("nano-css").TLength>;
    ml: PropTypes.Requireable<import("nano-css").TLength>;
    mx: PropTypes.Requireable<import("nano-css").TLength>;
    my: PropTypes.Requireable<import("nano-css").TLength>;
    p: PropTypes.Requireable<import("nano-css").TLength>;
    pb: PropTypes.Requireable<import("nano-css").TLength>;
    pt: PropTypes.Requireable<import("nano-css").TLength>;
    pr: PropTypes.Requireable<import("nano-css").TLength>;
    pl: PropTypes.Requireable<import("nano-css").TLength>;
    px: PropTypes.Requireable<import("nano-css").TLength>;
    py: PropTypes.Requireable<import("nano-css").TLength>;
    h: PropTypes.Requireable<import("nano-css").TLength>;
    w: PropTypes.Requireable<import("nano-css").TLength>;
    flex: PropTypes.Requireable<boolean>;
    inline: PropTypes.Requireable<boolean>;
    wrap: PropTypes.Requireable<boolean>;
    reverse: PropTypes.Requireable<boolean>;
    column: PropTypes.Requireable<boolean>;
    align: PropTypes.Requireable<string>;
    alignContent: PropTypes.Requireable<string>;
    alignSelf: PropTypes.Requireable<string>;
    justify: PropTypes.Requireable<string>;
    order: PropTypes.Requireable<number>;
    shrink: PropTypes.Requireable<number | boolean>;
    grow: PropTypes.Requireable<number | boolean>;
    basis: PropTypes.Requireable<number>;
    auto: PropTypes.Requireable<boolean>;
    center: PropTypes.Requireable<boolean>;
    as: PropTypes.Requireable<string>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
declare type BaseComponentProps = PropTypes.InferProps<typeof componentPropTypes>;
export interface ComponentProps extends BaseComponentProps {
    [key: string]: any;
}
declare class Box extends PureComponent<ComponentProps> {
    static displayName: string;
    static propTypes: {
        m: PropTypes.Requireable<import("nano-css").TLength>;
        mb: PropTypes.Requireable<import("nano-css").TLength>;
        mt: PropTypes.Requireable<import("nano-css").TLength>;
        mr: PropTypes.Requireable<import("nano-css").TLength>;
        ml: PropTypes.Requireable<import("nano-css").TLength>;
        mx: PropTypes.Requireable<import("nano-css").TLength>;
        my: PropTypes.Requireable<import("nano-css").TLength>;
        p: PropTypes.Requireable<import("nano-css").TLength>;
        pb: PropTypes.Requireable<import("nano-css").TLength>;
        pt: PropTypes.Requireable<import("nano-css").TLength>;
        pr: PropTypes.Requireable<import("nano-css").TLength>;
        pl: PropTypes.Requireable<import("nano-css").TLength>;
        px: PropTypes.Requireable<import("nano-css").TLength>;
        py: PropTypes.Requireable<import("nano-css").TLength>;
        h: PropTypes.Requireable<import("nano-css").TLength>;
        w: PropTypes.Requireable<import("nano-css").TLength>;
        flex: PropTypes.Requireable<boolean>;
        inline: PropTypes.Requireable<boolean>;
        wrap: PropTypes.Requireable<boolean>;
        reverse: PropTypes.Requireable<boolean>;
        column: PropTypes.Requireable<boolean>;
        align: PropTypes.Requireable<string>;
        alignContent: PropTypes.Requireable<string>;
        alignSelf: PropTypes.Requireable<string>;
        justify: PropTypes.Requireable<string>;
        order: PropTypes.Requireable<number>;
        shrink: PropTypes.Requireable<number | boolean>;
        grow: PropTypes.Requireable<number | boolean>;
        basis: PropTypes.Requireable<number>;
        auto: PropTypes.Requireable<boolean>;
        center: PropTypes.Requireable<boolean>;
        as: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    render: () => import("react").DOMElement<never, Element>;
}
declare class Flex extends PureComponent<ComponentProps> {
    static displayName: string;
    static propTypes: {
        m: PropTypes.Requireable<import("nano-css").TLength>;
        mb: PropTypes.Requireable<import("nano-css").TLength>;
        mt: PropTypes.Requireable<import("nano-css").TLength>;
        mr: PropTypes.Requireable<import("nano-css").TLength>;
        ml: PropTypes.Requireable<import("nano-css").TLength>;
        mx: PropTypes.Requireable<import("nano-css").TLength>;
        my: PropTypes.Requireable<import("nano-css").TLength>;
        p: PropTypes.Requireable<import("nano-css").TLength>;
        pb: PropTypes.Requireable<import("nano-css").TLength>;
        pt: PropTypes.Requireable<import("nano-css").TLength>;
        pr: PropTypes.Requireable<import("nano-css").TLength>;
        pl: PropTypes.Requireable<import("nano-css").TLength>;
        px: PropTypes.Requireable<import("nano-css").TLength>;
        py: PropTypes.Requireable<import("nano-css").TLength>;
        h: PropTypes.Requireable<import("nano-css").TLength>;
        w: PropTypes.Requireable<import("nano-css").TLength>;
        flex: PropTypes.Requireable<boolean>;
        inline: PropTypes.Requireable<boolean>;
        wrap: PropTypes.Requireable<boolean>;
        reverse: PropTypes.Requireable<boolean>;
        column: PropTypes.Requireable<boolean>;
        align: PropTypes.Requireable<string>;
        alignContent: PropTypes.Requireable<string>;
        alignSelf: PropTypes.Requireable<string>;
        justify: PropTypes.Requireable<string>;
        order: PropTypes.Requireable<number>;
        shrink: PropTypes.Requireable<number | boolean>;
        grow: PropTypes.Requireable<number | boolean>;
        basis: PropTypes.Requireable<number>;
        auto: PropTypes.Requireable<boolean>;
        center: PropTypes.Requireable<boolean>;
        as: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    render: () => import("react").DOMElement<never, Element>;
}
export { getPropsWithLayout, propTypes, Layout, Box, Flex };