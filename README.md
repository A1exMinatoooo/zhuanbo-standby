# 信姬组转播待机通用页面

## 使用方法

本页面架设于 GitHub Pages，可直接使用，访问格式如下

```https://hime-standby.a1ex.pw/?times=时间&staff=名称&slide=1&gpname=名称```

时间格式为 `YYYY-MM-DD!HH:MM:SS`

STAFF 名称后面支持中英文混排、部分符号及 Emoji

`slide` 用来控制是否循环播放 `./images/bk-转播对象` 文件夹内的图片

`gpname` 控制显示的页面样式，目前支持的有：

- `hime` : 織田信姫

- `tamaki` : 犬山たまき

- `mashiro` : 白雪みしろ

会替换页面内的 Emoji 以及底端转播信息

示例 URL: https://hime-standby.a1ex.pw/?times=2019-12-15!20:00:00&staff=A1ex_inamin&slide=1&gpname=hime

### 图片配置方法

由于前端功能受限，目前仅能实现较简单的图片轮播

配置标准如下

- 图片必须以 `img` 开头，接递增数字

- 图片必须为 `.png` 格式

正确的文件命名方式应该和下面的示例相同：

```
┌bk-hime
│img1.png
│img2.png
│img3.png
│img4.png
│img5.png
│img6.png
│img7.png
│img8.png
│img9.png
```

## LICENSE

MIT License