import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _inherits from"@babel/runtime/helpers/inherits";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _defineProperty from"@babel/runtime/helpers/defineProperty";var _jsxFileName="/Users/frengky/cephaLabs/utils/react-navigation-drawer/src/routers/__tests__/DrawerRouter.test.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}import*as React from'react';import DrawerRouter from'../DrawerRouter';import{NavigationActions,SwitchRouter,StackRouter}from'react-navigation';import*as DrawerActions from'../../routers/DrawerActions';var INIT_ACTION={type:NavigationActions.INIT};it('handles basic drawer logic and fires close on switch',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:12,columnNumber:25}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:25}});};var router=DrawerRouter({Foo:{screen:ScreenA},Bar:{screen:ScreenB}});var state=router.getStateForAction(INIT_ACTION);var expectedState={index:0,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo',params:undefined},{key:'Bar',routeName:'Bar',params:undefined}],isDrawerOpen:false};expect(state).toEqual(expectedState);var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state);var expectedState2={index:1,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo',params:undefined},{key:'Bar',routeName:'Bar',params:undefined}],isDrawerOpen:false};expect(state2).toEqual(expectedState2);expect(router.getComponentForState(expectedState)).toEqual(ScreenA);expect(router.getComponentForState(expectedState2)).toEqual(ScreenB);});it('handles initial route navigation',function(){var FooScreen=function FooScreen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:27}});};var BarScreen=function BarScreen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:27}});};var router=DrawerRouter({Foo:{screen:FooScreen},Bar:{screen:BarScreen}},{initialRouteName:'Bar'});var state=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Foo'});expect(state).toEqual({index:0,isDrawerOpen:false,isTransitioning:false,routes:[{key:'Foo',params:undefined,routeName:'Foo'},{key:'Bar',params:undefined,routeName:'Bar'}]});});it('drawer opens, closes and toggles',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:25}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:25}});};var router=DrawerRouter({Foo:{screen:ScreenA},Bar:{screen:ScreenB}});var state=router.getStateForAction(INIT_ACTION);expect(state.isDrawerOpen).toEqual(false);var state2=router.getStateForAction({type:DrawerActions.OPEN_DRAWER},state);expect(state2.isDrawerOpen).toEqual(true);var state3=router.getStateForAction({type:DrawerActions.CLOSE_DRAWER},state2);expect(state3.isDrawerOpen).toEqual(false);var state4=router.getStateForAction({type:DrawerActions.TOGGLE_DRAWER},state3);expect(state4.isDrawerOpen).toEqual(true);});it('drawer opens, closes with key targeted',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:25}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:25}});};var router=DrawerRouter({Foo:{screen:ScreenA},Bar:{screen:ScreenB}});var state=router.getStateForAction(INIT_ACTION);var state2=router.getStateForAction({type:DrawerActions.OPEN_DRAWER,key:'wrong'},state);expect(state2.isDrawerOpen).toEqual(false);var state3=router.getStateForAction({type:DrawerActions.OPEN_DRAWER,key:state.key},state2);expect(state3.isDrawerOpen).toEqual(true);});it('nested routers bubble up blocked actions',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:25}});};ScreenA.router={getStateForAction:function getStateForAction(action,lastState){if(action.type==='CHILD_ACTION')return null;return lastState;}};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:148,columnNumber:25}});};var router=DrawerRouter({Foo:{screen:ScreenA},Bar:{screen:ScreenB}});var state=router.getStateForAction(INIT_ACTION);var state2=router.getStateForAction({type:'CHILD_ACTION'},state);expect(state2).toEqual(null);});it('drawer does not fire close when child routers return new state',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:160,columnNumber:25}});};ScreenA.router={getStateForAction:function getStateForAction(action){var lastState=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{changed:false};if(action.type==='CHILD_ACTION')return _objectSpread(_objectSpread({},lastState),{},{changed:true});return lastState;}};var router=DrawerRouter({Foo:{screen:ScreenA}});var state=router.getStateForAction(INIT_ACTION);expect(state.isDrawerOpen).toEqual(false);var state2=router.getStateForAction({type:'CHILD_ACTION'},state);expect(state2.isDrawerOpen).toEqual(false);expect(state2.routes[0].changed).toEqual(true);});it('drawerRouter will close drawer on child navigaton, not on child param changes',function(){var FooView=function(_React$Component){_inherits(FooView,_React$Component);var _super=_createSuper(FooView);function FooView(){_classCallCheck(this,FooView);return _super.apply(this,arguments);}_createClass(FooView,[{key:"render",value:function render(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:186,columnNumber:14}});}}]);return FooView;}(React.Component);var BarRouter=SwitchRouter({Qux:FooView,Quo:FooView});var BarView=function(_React$Component2){_inherits(BarView,_React$Component2);var _super2=_createSuper(BarView);function BarView(){_classCallCheck(this,BarView);return _super2.apply(this,arguments);}_createClass(BarView,[{key:"render",value:function render(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:196,columnNumber:14}});}}]);return BarView;}(React.Component);BarView.router=BarRouter;var router=DrawerRouter({Bar:BarView,Foo:FooView});var emptyState=router.getStateForAction(NavigationActions.init());var initState=router.getStateForAction(DrawerActions.openDrawer(),emptyState);expect(initState.isDrawerOpen).toBe(true);var state0=router.getStateForAction(NavigationActions.navigate({routeName:'Quo'}),initState);expect(state0.isDrawerOpen).toBe(false);var initSwitchState=initState.routes[initState.index];var initQuxState=initSwitchState.routes[initSwitchState.index];var state1=router.getStateForAction(NavigationActions.setParams({key:initQuxState.key,params:{foo:'bar'}}),initState);var state1switchState=state1.routes[state1.index];var state1quxState=state1switchState.routes[state1switchState.index];expect(state1.isDrawerOpen).toBe(true);expect(state1quxState.params.foo).toEqual('bar');});it('goBack closes drawer when inside of stack',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:234,columnNumber:25}});};var DrawerScreen=function DrawerScreen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:235,columnNumber:30}});};DrawerScreen.router=DrawerRouter({Foo:{screen:ScreenA},Bar:{screen:ScreenA}});var router=StackRouter({Baz:{screen:ScreenA},Drawer:{screen:DrawerScreen}});var state0=router.getStateForAction(INIT_ACTION);expect(state0.index).toEqual(0);var state1=router.getStateForAction(NavigationActions.navigate({routeName:'Foo'}),state0);expect(state1.index).toEqual(1);var state2=router.getStateForAction(DrawerActions.openDrawer(),state1);var state3=router.getStateForAction({type:DrawerActions.DRAWER_OPENED},state2);expect(state3.index).toEqual(1);expect(state3.routes[1].isDrawerOpen).toEqual(true);var state4=router.getStateForAction(NavigationActions.back(),state3);expect(state4.routes[1].isDrawerOpen).toEqual(false);});
//# sourceMappingURL=DrawerRouter.test.js.map