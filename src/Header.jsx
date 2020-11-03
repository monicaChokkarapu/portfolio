import React from 'react'
import {PageHeader} from 'antd';
import HeaderMenu from './HeaderMenu';

function Header() {
    return (
        <div style={{
            'backgroundColor': '#f5f5f5',
            padding: '24px'
          }}>
            <PageHeader
                ghost={false}
                title={<div style={{
                    fontSize: 'larger',
                    fontFamily: 'sans-serif',
                    padding: '5px',
                    border: '4px solid',
                }}>MC</div>}
                extra={[<HeaderMenu/>]}>
            </PageHeader>
        </div>
    )
}

export default Header;
