import React from 'react'
import Lifegame from '@/components/Lifegame'
import './guide.less'

export default () => {
    return (
        <div className="guide">
            <Lifegame size={300} />
            <blockquote className="quotoSICP">
                <p>
                    如果说艺术解释了我们的梦想，
                    <br />
                    那么计算机就是以程序的名义执行着它们。
                </p>
                <i style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '14px' }}>
                    —— Alan J.Perlis《计算机程序的构造与解释》
                </i>
            </blockquote>
            <div className="link">
                <h3 onClick={() => location.replace('/#/home')}></h3>
            </div>
        </div>
    )
}
