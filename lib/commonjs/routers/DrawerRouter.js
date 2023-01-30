var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _reactNavigation=require("react-navigation");var DrawerActions=_interopRequireWildcard(require("./DrawerActions"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function withDefaultValue(obj,key,defaultValue){if(obj.hasOwnProperty(key)&&typeof obj[key]!=='undefined'){return obj;}obj[key]=defaultValue;return obj;}var getActiveRouteKey=function getActiveRouteKey(route){if(route.routes&&typeof route.index==='number'&&route.routes[route.index]){return getActiveRouteKey(route.routes[route.index]);}return route.key;};var _default=function _default(routeConfigs){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};config=_objectSpread({},config);config=withDefaultValue(config,'resetOnBlur',config.unmountInactiveRoutes?true:!!config.resetOnBlur);config=withDefaultValue(config,'backBehavior','initialRoute');var switchRouter=(0,_reactNavigation.SwitchRouter)(routeConfigs,config);return _objectSpread(_objectSpread({},switchRouter),{},{getActionCreators:function getActionCreators(route,navStateKey){return _objectSpread({openDrawer:function openDrawer(){return DrawerActions.openDrawer({key:navStateKey});},closeDrawer:function closeDrawer(){return DrawerActions.closeDrawer({key:navStateKey});},toggleDrawer:function toggleDrawer(){return DrawerActions.toggleDrawer({key:navStateKey});}},switchRouter.getActionCreators(route,navStateKey));},getStateForAction:function getStateForAction(action,state){if(!state){return _objectSpread(_objectSpread({},switchRouter.getStateForAction(action,undefined)),{},{isDrawerOpen:false});}var isRouterTargeted=action.key==null||action.key===state.key;if(isRouterTargeted){if(action.type===DrawerActions.CLOSE_DRAWER||action.type===_reactNavigation.NavigationActions.BACK&&state.isDrawerOpen){return _objectSpread(_objectSpread({},state),{},{isDrawerOpen:false});}if(action.type===DrawerActions.OPEN_DRAWER){return _objectSpread(_objectSpread({},state),{},{isDrawerOpen:true});}if(action.type===DrawerActions.TOGGLE_DRAWER){return _objectSpread(_objectSpread({},state),{},{isDrawerOpen:!state.isDrawerOpen});}}var switchedState=switchRouter.getStateForAction(action,state);if(switchedState===null){return null;}if(switchedState!==state){if(getActiveRouteKey(switchedState)!==getActiveRouteKey(state)&&state.isDrawerOpen){return _objectSpread(_objectSpread({},switchedState),{},{isDrawerOpen:false});}return switchedState;}return state;}});};exports.default=_default;
//# sourceMappingURL=DrawerRouter.js.map