import React from 'react'
import {Header} from './Header'
import {Buttons} from "./ButtonGroup/ButtonGroup";
import {Statistics} from "./Statistic/Statistic";
import {StatisticDescription} from "./Statistic/StatisticDescription";


type IProps = {}
export type IState = {
    good: number,
    neutral: number,
    bad: number
}

export class MainPage extends React.Component<IProps, IState> {


    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    buttons = Object.keys(this.state)

    onChangeStatistics = (value: 'good' | 'neutral' | 'bad') => {
        this.setState(prevState => {
        // @ts-ignore
            return {...prevState, [value]: prevState[value] += 1}
        })
    }


    render() {
        return (
            <>
                <Header/>
                <Buttons
                    buttons={this.buttons}
                    onChangeStatistics={this.onChangeStatistics}
                />
                {Object.values(this.state).find(i => i !== 0) ?
                    <Statistics
                        state={this.state}
                    /> :
                    <StatisticDescription
                        value={'no feedback given'}
                        variant={'p'}
                        align={'center'}

                    />
                }
            </>
        )
    }
}