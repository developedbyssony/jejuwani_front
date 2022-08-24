import React from 'react';
import styled from 'styled-components';

const paymentBody = styled.div`
    height:2000px;
    width:100%;
`;

function payment() {
    return (
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                <div class="section">
                    <paymentBody>
                        <div className="pBody">
                        <h1>결제가 완료되었습니다.</h1>
                        </div>
                    </paymentBody>
                    </div>
                </div>
                </div>
                </div>
        );
}

export default payment;