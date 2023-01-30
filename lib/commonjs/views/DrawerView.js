var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNavigation=require("react-navigation");var _reactNativeScreens=require("react-native-screens");var DrawerActions=_interopRequireWildcard(require("../routers/DrawerActions"));var _DrawerSidebar=_interopRequireDefault(require("./DrawerSidebar"));var _DrawerGestureContext=_interopRequireDefault(require("../utils/DrawerGestureContext"));var _ResourceSavingScene=_interopRequireDefault(require("./ResourceSavingScene"));var _Drawer=_interopRequireDefault(require("./Drawer"));var _jsxFileName="/Users/frengky/cephaLabs/utils/react-navigation-drawer/src/views/DrawerView.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var DrawerView=function(_React$PureComponent){(0,_inherits2.default)(DrawerView,_React$PureComponent);var _super=_createSuper(DrawerView);function DrawerView(){var _this;(0,_classCallCheck2.default)(this,DrawerView);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={loaded:[_this.props.navigation.state.index],drawerWidth:typeof _this.props.navigationConfig.drawerWidth==='function'?_this.props.navigationConfig.drawerWidth():_this.props.navigationConfig.drawerWidth};_this.drawerGestureRef=React.createRef();_this.getLockMode=function(_ref){var navigation=_ref.navigation,descriptors=_ref.descriptors;var activeKey=navigation.state.routes[navigation.state.index].key;var drawerLockMode=descriptors[activeKey].options.drawerLockMode;return drawerLockMode;};_this.handleDrawerOpen=function(){var navigation=_this.props.navigation;navigation.dispatch(DrawerActions.openDrawer({key:navigation.state.key}));};_this.handleDrawerClose=function(){var navigation=_this.props.navigation;navigation.dispatch(DrawerActions.closeDrawer({key:navigation.state.key}));};_this.updateWidth=function(){var drawerWidth=typeof _this.props.navigationConfig.drawerWidth==='function'?_this.props.navigationConfig.drawerWidth():_this.props.navigationConfig.drawerWidth;if(_this.state.drawerWidth!==drawerWidth){_this.setState({drawerWidth:drawerWidth});}};_this.renderNavigationView=function(_ref2){var progress=_ref2.progress;return React.createElement(_DrawerSidebar.default,(0,_extends2.default)({screenProps:_this.props.screenProps,drawerOpenProgress:progress,navigation:_this.props.navigation,descriptors:_this.props.descriptors,contentComponent:_this.props.navigationConfig.contentComponent,contentOptions:_this.props.navigationConfig.contentOptions,drawerPosition:_this.props.navigationConfig.drawerPosition,style:_this.props.navigationConfig.style},_this.props.navigationConfig,{__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:7}}));};_this.renderContent=function(){var _this$props=_this.props,lazy=_this$props.lazy,navigation=_this$props.navigation;var loaded=_this.state.loaded;var routes=navigation.state.routes;if(_this.props.navigationConfig.unmountInactiveRoutes){var activeKey=navigation.state.routes[navigation.state.index].key;var descriptor=_this.props.descriptors[activeKey];return React.createElement(_reactNavigation.SceneView,{navigation:descriptor.navigation,screenProps:_this.props.screenProps,component:descriptor.getComponent(),__source:{fileName:_jsxFileName,lineNumber:181,columnNumber:9}});}else{return React.createElement(_reactNativeScreens.ScreenContainer,{style:styles.content,__source:{fileName:_jsxFileName,lineNumber:189,columnNumber:9}},routes.map(function(route,index){if(lazy&&!loaded.includes(index)){return null;}var isFocused=navigation.state.index===index;var descriptor=_this.props.descriptors[route.key];return React.createElement(_ResourceSavingScene.default,{key:route.key,style:[_reactNative.StyleSheet.absoluteFill,{opacity:isFocused?1:0}],isVisible:isFocused,__source:{fileName:_jsxFileName,lineNumber:200,columnNumber:15}},React.createElement(_reactNavigation.SceneView,{navigation:descriptor.navigation,screenProps:_this.props.screenProps,component:descriptor.getComponent(),__source:{fileName:_jsxFileName,lineNumber:208,columnNumber:17}}));}));}};_this.setDrawerGestureRef=function(ref){_this.drawerGestureRef.current=ref;};return _this;}(0,_createClass2.default)(DrawerView,[{key:"componentDidMount",value:function componentDidMount(){if(this.getLockMode(this.props)==='locked-open'){this.handleDrawerOpen();}_reactNative.Dimensions.addEventListener('change',this.updateWidth);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var prevLockMode=this.getLockMode(prevProps);var nextLockMode=this.getLockMode(this.props);if(prevLockMode!==nextLockMode){if(nextLockMode==='locked-open'){this.handleDrawerOpen();}else{this.handleDrawerClose();}}}},{key:"componentWillUnmount",value:function componentWillUnmount(){_reactNative.Dimensions.removeEventListener('change',this.updateWidth);}},{key:"getDrawerBackgroundColor",value:function getDrawerBackgroundColor(){var drawerBackgroundColor=this.props.navigationConfig.drawerBackgroundColor;if(drawerBackgroundColor){return typeof drawerBackgroundColor==='string'?drawerBackgroundColor:drawerBackgroundColor[this.context];}else{return _reactNavigation.ThemeColors[this.context].bodyContent;}}},{key:"getOverlayColor",value:function getOverlayColor(){var overlayColor=this.props.navigationConfig.overlayColor;if(overlayColor){return typeof overlayColor==='string'?overlayColor:overlayColor[this.context];}else{return'rgba(0,0,0,0.5)';}}},{key:"render",value:function render(){var _this$props2=this.props,navigation=_this$props2.navigation,navigationConfig=_this$props2.navigationConfig;var drawerType=navigationConfig.drawerType,sceneContainerStyle=navigationConfig.sceneContainerStyle,edgeWidth=navigationConfig.edgeWidth,minSwipeDistance=navigationConfig.minSwipeDistance,hideStatusBar=navigationConfig.hideStatusBar,statusBarAnimation=navigationConfig.statusBarAnimation,gestureHandlerProps=navigationConfig.gestureHandlerProps;var drawerLockMode=this.getLockMode(this.props);var drawerBackgroundColor=this.getDrawerBackgroundColor();var overlayColor=this.getOverlayColor();return React.createElement(_DrawerGestureContext.default.Provider,{value:this.drawerGestureRef,__source:{fileName:_jsxFileName,lineNumber:267,columnNumber:7}},React.createElement(_Drawer.default,{open:navigation.state.isDrawerOpen,gestureEnabled:drawerLockMode!=='locked-open'&&drawerLockMode!=='locked-closed',onOpen:this.handleDrawerOpen,onClose:this.handleDrawerClose,onGestureRef:this.setDrawerGestureRef,gestureHandlerProps:gestureHandlerProps,drawerType:drawerType,drawerPosition:this.props.navigationConfig.drawerPosition,sceneContainerStyle:sceneContainerStyle,drawerStyle:{backgroundColor:drawerBackgroundColor,width:this.state.drawerWidth},overlayStyle:{backgroundColor:overlayColor},swipeEdgeWidth:edgeWidth,swipeDistanceThreshold:minSwipeDistance,hideStatusBar:hideStatusBar,statusBarAnimation:statusBarAnimation,renderDrawerContent:this.renderNavigationView,renderSceneContent:this.renderContent,__source:{fileName:_jsxFileName,lineNumber:268,columnNumber:9}}));}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(nextProps,prevState){var index=nextProps.navigation.state.index;return{loaded:prevState.loaded.includes(index)?prevState.loaded:[].concat((0,_toConsumableArray2.default)(prevState.loaded),[index])};}}]);return DrawerView;}(React.PureComponent);exports.default=DrawerView;DrawerView.contextType=_reactNavigation.ThemeContext;DrawerView.defaultProps={lazy:true};var styles=_reactNative.StyleSheet.create({content:{flex:1}});
//# sourceMappingURL=DrawerView.js.map