/**
 * Simplified Chinese translation
 * @author 翻译者 <deerchao@gmail.com>
 * @version 2011-09-08
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
    elFinder.prototype.i18.zh_CN = {
        translator: '翻译者 &lt;deerchao@gmail.com&gt;',
        language: '简体中文',
        direction: 'ltr',
        messages: {
            /********************************** errors **********************************/
            'error': '错误',
            'errUnknown': '未知的错误.',
            'errUnknownCmd': '未知的命令.',
            'errJqui': '无效的 jQuery UI 配置. 必须包含 Selectable, draggable 以及 droppable 组件.',
            'errNode': 'elFinder 需要能创建 DOM 元素.',
            'errURL': '无效的 elFinder 配置! URL 选项未配置.',
            'errAccess': '访问被拒绝.',
            'errConnect': '不能连接到后端.',
            'errAbort': '连接中止.',
            'errTimeout': '连接超时.',
            'errNotFound': '未找到后端.',
            'errResponse': '无效的后端响应.',
            'errConf': '无效的后端配置.',
            'errJSON': 'PHP JSON 模块未安装.',
            'errNoVolumes': '无可读的卷.',
            'errCmdParams': '无效的参数, 命令: "$1".',
            'errDataNotJSON': '响应不符合 JSON 格式.',
            'errDataEmpty': '响应为空.',
            'errCmdReq': '后端请求需要命令名称.',
            'errOpen': '无法打开 "$1".',
            'errNotFolder': '对象不是文件夹.',
            'errNotFile': '对象不是文件.',
            'errRead': '无法读取 "$1".',
            'errWrite': '无法写入 "$1".',
            'errPerm': '无权限.',
            'errLocked': '"$1" 被锁定,不能重命名, 移动或删除.',
            'errExists': '文件 "$1" 已经存在了.',
            'errInvName': '无效的文件名.',
            'errFolderNotFound': '未找到文件夹.',
            'errFileNotFound': '未找到文件.',
            'errTrgFolderNotFound': '未找到目标文件夹 "$1".',
            'errPopup': '浏览器拦截了弹出窗口. 请在选项中允许弹出窗口.',
            'errMkdir': '不能创建文件夹 "$1".',
            'errMkfile': '不能创建文件 "$1".',
            'errRename': '不能重命名 "$1".',
            'errCopyFrom': '不允许从卷 "$1" 复制.',
            'errCopyTo': '不允许向卷 "$1" 复制.',
            'errUploadCommon': '上传出错.',
            'errUpload': '无法上传 "$1".',
            'errUploadNoFiles': '未找到要上传的文件.',
            'errMaxSize': '数据超过了允许的最大大小.',
            'errFileMaxSize': '文件超过了允许的最大大小.',
            'errUploadMime': '不允许的文件类型.',
            'errUploadTransfer': '"$1" 传输错误.',
            'errSave': '无法保存 "$1".',
            'errCopy': '无法复制 "$1".',
            'errMove': '无法移动 "$1".',
            'errCopyInItself': '不能移动 "$1" 到原有位置.',
            'errRm': '无法删除 "$1".',
            'errExtract': '无法从 "$1" 提取文件.',
            'errArchive': '无法创建压缩包.',
            'errArcType': '不支持的压缩格式.',
            'errNoArchive': '文件不是压缩包, 或者不支持该压缩格式.',
            'errCmdNoSupport': '后端不支持该命令.',
            /******************************* commands names ********************************/
            'cmdarchive': '创建压缩包',
            'cmdback': '后退',
            'cmdcopy': '复制',
            'cmdcut': '剪切',
            'cmddownload': '下载',
            'cmdduplicate': '创建复本',
            'cmdedit': '编辑文件',
            'cmdextract': '从压缩包提取文件',
            'cmdforward': '前进',
            'cmdgetfile': '选择文件',
            'cmdhelp': '关于本软件',
            'cmdhome': '首页',
            'cmdinfo': '查看信息',
            'cmdmkdir': '新建文件夹',
            'cmdmkfile': '新建文本文件',
            'cmdopen': '打开',
            'cmdpaste': '粘贴',
            'cmdquicklook': '预览',
            'cmdreload': '刷新',
            'cmdrename': '重命名',
            'cmdrm': '删除',
            'cmdsearch': '查找文件',
            'cmdup': '转到上一级文件夹',
            'cmdupload': '上传文件',
            'cmdview': '查看',
            /*********************************** buttons ***********************************/
            'btnClose': '关闭',
            'btnSave': '保存',
            'btnRm': '删除',
            'btnCancel': '取消',
            'btnNo': '否',
            'btnYes': '是',
            /******************************** notifications ********************************/
            'ntfopen': '打开文件夹',
            'ntffile': '打开文件',
            'ntfreload': '刷新文件夹内容',
            'ntfmkdir': '创建文件夹',
            'ntfmkfile': '创建文件',
            'ntfrm': '删除文件',
            'ntfcopy': '复制文件',
            'ntfmove': '移动文件',
            'ntfprepare': '准备复制文件',
            'ntfrename': '重命名文件',
            'ntfupload': '上传文件',
            'ntfdownload': '下载文件',
            'ntfsave': '保存文件',
            'ntfarchive': '创建压缩包',
            'ntfextract': '从压缩包提取文件',
            'ntfsearch': '搜索文件',
            'ntfsmth': '正在忙 >_<',
            /************************************ dates **********************************/
            'dateUnknown': '未知',
            'Today': '今天',
            'Yesterday': '昨天',
            'Jan': '一月',
            'Feb': '二月',
            'Mar': '三月',
            'Apr': '四月',
            'May': '五月',
            'Jun': '六月',
            'Jul': '七月',
            'Aug': '八月',
            'Sep': '九月',
            'Oct': '十月',
            'Nov': '十一月',
            'Dec': '十二月',
            /********************************** messages **********************************/
            'confirmReq': '请确认',
            'confirmRm': '确定要删除文件吗?<br/>该操作不可撤销!',
            'confirmRepl': '用新的文件替换原有文件?',
            'apllyAll': '全部应用',
            'name': '名称',
            'size': '大小',
            'perms': '权限',
            'modify': '修改于',
            'kind': '类别',
            'read': '读取',
            'write': '写入',
            'noaccess': '无权限',
            'and': '和',
            'unknown': '未知',
            'selectall': '选择所有文件',
            'selectfiles': '选择文件',
            'selectffile': '选择第一个文件',
            'selectlfile': '选择最后一个文件',
            'viewlist': '列表视图',
            'viewicons': '图标视图',
            'places': '位置',
            'calc': '计算',
            'path': '路径',
            'aliasfor': '别名',
            'locked': '锁定',
            'dim': '尺寸',
            'files': '文件',
            'folders': '文件夹',
            'items': '项目',
            'yes': '是',
            'no': '否',
            'link': '链接',
            'searcresult': '搜索结果',
            'selected': '选中的项目',
            'about': '关于',
            'shortcuts': '快捷键',
            'help': '帮助',
            'webfm': '网络文件管理器',
            'ver': '版本',
            'protocol': '协议版本',
            'homepage': '项目主页',
            'docs': '文档',
            'github': 'Fork us on Github',
            'twitter': 'Follow us on twitter',
            'facebook': 'Join us on facebook',
            'team': '团队',
            'chiefdev': '首席开发',
            'developer': '开发',
            'contributor': '贡献',
            'maintainer': '维护',
            'translator': '翻译',
            'icons': '图标',
            'dontforget': '别忘了带上你的毛巾',
            'shortcutsof': '快捷键已禁用',
            'dropFiles': '把文件拖到这里',
            'or': '或者',
            'selectForUpload': '选择要上传的文件',
            'moveFiles': '移动文件',
            'copyFiles': '复制文件',
            /********************************** mimetypes **********************************/
            'kindUnknown': '未知',
            'kindFolder': '文件夹',
            'kindAlias': '别名',
            'kindAliasBroken': '错误的别名',
            // applications
            'kindApp': '程序',
            'kindPostscript': 'Postscript 文档',
            'kindMsOffice': 'Microsoft Office 文档',
            'kindMsWord': 'Microsoft Word 文档',
            'kindMsExcel': 'Microsoft Excel 文档',
            'kindMsPP': 'Microsoft Powerpoint 演示',
            'kindOO': 'Open Office 文档',
            'kindAppFlash': 'Flash 程序',
            'kindPDF': 'Portable Document Format (PDF)',
            'kindTorrent': 'Bittorrent 文件',
            'kind7z': '7z 压缩包',
            'kindTAR': 'TAR 压缩包',
            'kindGZIP': 'GZIP 压缩包',
            'kindBZIP': 'BZIP 压缩包',
            'kindZIP': 'ZIP 压缩包',
            'kindRAR': 'RAR 压缩包',
            'kindJAR': 'Java JAR 文件',
            'kindTTF': 'True Type 字体',
            'kindOTF': 'Open Type 字体',
            'kindRPM': 'RPM 包',
            // texts
            'kindText': '文本文件',
            'kindTextPlain': '纯文本',
            'kindPHP': 'PHP 源代码',
            'kindCSS': '层叠样式表(CSS)',
            'kindHTML': 'HTML 文档',
            'kindJS': 'Javascript 源代码',
            'kindRTF': '富文本格式(RTF)',
            'kindC': 'C 源代码',
            'kindCHeader': 'C 头文件',
            'kindCPP': 'C++ 源代码',
            'kindCPPHeader': 'C++ 头文件',
            'kindShell': 'Unix 外壳脚本',
            'kindPython': 'Python 源代码',
            'kindJava': 'Java 源代码',
            'kindRuby': 'Ruby 源代码',
            'kindPerl': 'Perl 源代码',
            'kindSQL': 'SQL 脚本',
            'kindXML': 'XML 文档',
            'kindAWK': 'AWK 源代码',
            'kindCSV': '逗号分隔值文件(CSV)',
            'kindDOCBOOK': 'Docbook XML 文档',
            // images
            'kindImage': '图片',
            'kindBMP': 'BMP 图片',
            'kindJPEG': 'JPEG 图片',
            'kindGIF': 'GIF 图片',
            'kindPNG': 'PNG 图片',
            'kindTIFF': 'TIFF 图片',
            'kindTGA': 'TGA 图片',
            'kindPSD': 'Adobe Photoshop 图片',
            'kindXBITMAP': 'X bitmap 图片',
            'kindPXM': 'Pixelmator 图片',
            // media
            'kindAudio': '音频',
            'kindAudioMPEG': 'MPEG 音频',
            'kindAudioMPEG4': 'MPEG-4 音频',
            'kindAudioMIDI': 'MIDI 音频',
            'kindAudioOGG': 'Ogg Vorbis 音频',
            'kindAudioWAV': 'WAV 音频',
            'AudioPlaylist': 'MP3 播放列表',
            'kindVideo': '视频',
            'kindVideoDV': 'DV 视频',
            'kindVideoMPEG': 'MPEG 视频',
            'kindVideoMPEG4': 'MPEG-4 视频',
            'kindVideoAVI': 'AVI 视频',
            'kindVideoMOV': 'Quick Time 视频',
            'kindVideoWM': 'Windows Media 视频',
            'kindVideoFlash': 'Flash 视频',
            'kindVideoMKV': 'Matroska 视频',
            'kindVideoOGG': 'Ogg 视频'
        }
    };
}
