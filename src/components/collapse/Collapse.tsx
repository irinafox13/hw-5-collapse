import "./Collapse.css"
import {CollapseProps} from './Collapse'
import * as React from 'react';

const Collapse = ({collapsedLabel = "Развернуть", expandedLabel = "Свернуть", children}: CollapseProps) => {
    const [collapse, setCollapse] = React.useState<boolean>(false);

    const label: string = collapse ? expandedLabel : collapsedLabel;
    
    return (
        <div className="block">
            <button type="button" onClick={() => setCollapse(!collapse)}>{label}</button>
            <div className={`collapse ${collapse ? '' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}

export default Collapse;