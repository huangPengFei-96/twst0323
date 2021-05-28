

## jQuery插件


> jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。
>
> jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。

### jquery.color.js

> animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。

下载地址:https://github.com/jquery/jquery-color

使用插件的步骤

```javascript
1. 引入jQuery文件
2. 引入插件（如果有用到css的话，需要引入css）
3. 使用插件
```

```javascript
<!-- 1. 引入 jquery -->
<script src="jquery-1.12.4.js"></script>
<!-- 2. 引入 插件 -->
<script src="jquery.color.js"></script>

<script>
  
  // 引入 jquery.color.js 就能让 animate 强化功能
  // 可以实现颜色渐变
  $(function () {
    $('div').animate({
      width: 400,
      height: 400,
      backgroundColor: 'blue'
    }, 2000)
  });

```



### jquery.lazyload.js

下载地址:https://github.com/tuupola/jquery_lazyload/tree/1.x

懒加载插件的使用

1. 引包

   ```css
   <script src="jquery-1.12.4.js"></script>
   <script src="jquery.lazyload.js" ></script>
   ```

2. 真图片地址, 设置给 data-original, 并给需要懒加载的图片加上统一的类( lazy )

   ```css
   <img class="lazy" data-original="02.gif" width="640" height="480">
   ```

3. 实例初始化

   ```js
   $('img.lazy').lazyload({
     effect : "fadeIn", // 加效果 slideDown  show
     event:'click;  //点击时加载
     placeholder : "/default.jpg",  //默认图 
   });
   ```

   

## 制作 jquery 插件

思考: 如何给数组扩展方法  ?

```javascript
Array.prototype.XXX = function(){}
```

jQuery插件的原理是什么 ?

> 原理：大部分 jquery插件, 其实说白了就是给jquery原型增加一个新的方法，让jquery对象拥有某一个功能。

```javascript
// 通过给$.fn添加方法就能够扩展jquery对象
$.fn.pluginName = function() {};
```










