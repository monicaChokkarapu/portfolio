import React from 'react';
import { Card, Col, Row } from 'antd';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <text style={{fontFamily: 'monospace',
                    fontSize: '35px',
                    marginTop: '30px'
                }}>
                These are my projects.
                </text>
            </div>
            <div style={{
                padding: '30px',
                background: '#ececec'
            }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <ProjectCard description='E commerce web site like amazon.'/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Projects
