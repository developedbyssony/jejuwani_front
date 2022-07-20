import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function tab({eventKey1, eventKey2, tapTitle1, tapTitle2, contents1, contents2}) {
        return (
            <div className="tab-wrapper">
            <div className='container-fluid' >
              <div className="row">
                <div className="col-sm-12">
                <Tabs defaultActiveKey={eventKey1}>
                    <Tab eventKey={eventKey1} title={tapTitle1} >
                        <div className="tab-item-wrapper">
                        {contents1}
                        </div>
                </Tab>

                <Tab eventKey={eventKey2} title={tapTitle2} >
                        <div className="tab-item-wrapper">
                        {contents2}
                        </div>
                    </Tab>
                </Tabs>
                    </div>
                </div>
                </div>
            </div>
        );
    }

export default tab;