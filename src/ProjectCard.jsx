import React from 'react'
import {Card} from 'antd';

function ProjectCard({description}) {
    const onCardClick = () => window.open('https://ecommerce-64f3a.web.app');
    return (
        <div className="site-card-border-less-wrapper" onClick={onCardClick}>
            <Card title="E Commerce" hoverable={true} bordered={true} style={{ width: 300 }}>
                <text>{description}</text>
            </Card>
      </div>
    )
}

export default ProjectCard;
