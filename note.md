version
js vs jsx
clean code
eslintrc
css_base_line
MUI -> theming --> Default Theme viewer

dark-light mode :https://mui.com/material-ui/experimental-api/css-theme-variables/migration/
fix Dark mode flickering
https://mui.com/material-ui/experimental-api/css-theme-variables/overview/#usecolorscheme-colorschemecontextvalue
https://mui.com/material-ui/experimental-api/css-theme-variables/overview/#cssvarsprovider-gt-props

------custom-css---------
**\_\_\_**https://mui.com/material-ui/customization/how-to-customize/

--------------------Layout-----------------

Absolute ~ & Relative import ../../ config in vite.config alias
add file jsconfig.js

svgr custom SvgIcon -> svg mui
------AppBar -----------
|\_\_ Tooltip , badge ,
-- theme Override
custom outline https://stackoverflow.com/questions/69860132/how-to-remove-the-border-of-the-material-ui-select-component/73707977#73707977

---------Responsive------------
--AppBar: https://mui.com/material-ui/react-app-bar/
--Drawer: https://mui.com/material-ui/react-drawer/
--BreakPoints: https://mui.com/material-ui/customization/breakpoints/
--Custom scrollbar: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
--color: https://flatuicolors.com/

-------------BoardBar-------------------
<startIcon Button endIcon />

-------------BoardContent-----------
margin for scrollbar css : trick {p 0 5px , m: 0 5px}

BoardContent
|
ListColumns
|
Column
|
ListCards
|
Card
------- drap-drop---
"@dnd-kit/core": "^6.0.8",
"@dnd-kit/sortable": "^7.0.2",
"@dnd-kit/utilities": "^3.2.1",

- (Sortable Context) Lưu ý về mảng Items trong component SortableContext
  https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512- (Sensors) Yêu cầu chuột di chuyển 10px thì mới kích hoạt, fix trường hợp click bị gọi event
  https://docs.dndkit.com/api-documentation/sensors#usesensorLỗi kéo thả phần tử bị stretch khá dị:
  https://github.com/clauderic/dnd-kit/issues/117- Dung sai của cảm ứng: Tolerance ()
  https://docs.dndkit.com/api-documentation/sensors/touch#delay
