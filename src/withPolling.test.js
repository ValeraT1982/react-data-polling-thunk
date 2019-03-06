import * as React from 'react';
import {mount} from 'enzyme';
import {withPolling} from './withPolling';
import {configureStore} from "./configureStore";
import {Provider} from "react-redux";

jest.useFakeTimers();

describe('withPolling HOC Tests', () => {
    let store;
    let wrapper;

    const TestComponent = () => (
        <div id='test-component'>
            Test Component
        </div>
    );

    beforeEach(() => {
        store = configureStore();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('function is called on mount', () => {
        const mockFn = jest.fn();
        const testAction = () => () => {
            mockFn();
        };

        const WrapperComponent = withPolling(testAction)(TestComponent);

        wrapper = mount(<Provider store={store}><WrapperComponent/></Provider>);

        expect(wrapper.find('#test-component')).toHaveLength(1);
        expect(mockFn.mock.calls.length).toBe(1);
    });

    it('function is called second time after duration', () => {
        const mockFn = jest.fn();
        const testAction = () => () => {
            mockFn();
        };

        const WrapperComponent = withPolling(testAction, 1000)(TestComponent);

        wrapper = mount(<Provider store={store}><WrapperComponent/></Provider>);

        expect(wrapper.find('#test-component')).toHaveLength(1);
        expect(mockFn.mock.calls.length).toBe(1);

        jest.runTimersToTime(1001);

        expect(mockFn.mock.calls.length).toBe(2);
    });
});
