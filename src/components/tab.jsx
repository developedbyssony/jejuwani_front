import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function tab({eventKey1, eventKey2, eventKey3, eventKey4, eventKey5, eventKey6, tapTitle3, tapTitle4, tapTitle5, tapTitle6, tapTitle1, tapTitle2, contents1, contents2,contents3,contents4,contents5,contents6}) {
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

                    <Tab eventKey={eventKey3}  title={tapTitle3} >
                        <div className="tab-item-wrapper">
                        {contents3}
                        </div>
                    </Tab>

                    <Tab eventKey={eventKey4} title={tapTitle4} >
                        <div className="tab-item-wrapper">
                        {contents4}
                        </div>
                    </Tab>
                    <Tab eventKey={eventKey5}  title={tapTitle5} >
                        <div className="tab-item-wrapper">
                        {contents5}
                        </div>
                    </Tab>
                    <Tab eventKey={eventKey6}  title={tapTitle6} >
                        <div className="tab-item-wrapper">
                        {contents6}
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