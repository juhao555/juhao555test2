# 无敌暴龙神创作主页交接说明

这份文件是给后续接手本项目的 Codex / 新模型看的。请先读完再改代码。

## 项目定位

这是一个个人创作主页，不是正式商业作品集，也不是简历站。

站点主人叫“无敌暴龙神”。网站的核心气质是：温柔、治愈、卡通动漫感、个人创作记录、慢慢成长的小宇宙。文案不要写得太职业化、太营销化、太模板化。用户喜欢“正在整理”“不是最终完成版”“创作记录”这种诚实、轻一点的表达。

网站线上仓库：

- GitHub 仓库：`juhao555/juhao555test2`
- GitHub Pages 地址大概率是：`https://juhao555.github.io/juhao555test2/`
- 本地项目位置：`C:\Users\juhao\Desktop\pet_care`

## 当前文件结构

主要文件：

- `index.html`：主页。
- `styles.css`：全站样式，包含主页、作品卡、故事入口、阅读页、2107 页面、云朵牧场页面。
- `script.js`：轻量交互，包括图片灯箱、滚动浮现、按时间变化的氛围文案。
- `chapter-01.html`：维克与光第一集漫画试作阅读页。
- `forward.html`：《向前》花滑分镜试作阅读页。
- `civitas-2107.html`：`2107：未来档案试作` 项目页。
- `cloud-ranch.html`：`云朵牧场日常` 项目页。
- `PROJECT_HANDOFF.md`：本交接文件。

资源文件：

- `assets/avatar.jpg`：头像。
- `assets/rooftop-onigiri.png`：维克与光月夜天台饭团图。
- `assets/victor-solo.png`、`assets/hikari-solo.png`：维克和光单人图。
- `assets/victor-sheet.png`、`assets/hikari-sheet.png`：角色设定稿。
- `assets/chapter-01/`：维克与光漫画试作图。
- `assets/forward/`：花滑《向前》分镜图，已是 JPG，体积较小。
- `assets/2107/`：未来档案试作海报组。
- `assets/cloud-ranch/`：云朵牧场日常图。
- `assets/studio-animals.png`：早期生成的小动物图，当前不是核心内容，不要随便删除。

## 主页内容结构

主页当前逻辑：

1. 顶部导航和头像品牌。
2. Hero：无敌暴龙神的创作记录，主视觉是维克与光饭团图。
3. “关于这个小宇宙”：强调不是正式作品集，是慢慢整理喜欢的东西。
4. 作品区：
   - 普通图片卡：月夜天台的饭团、维克、光、维克设定稿、光设定稿。
   - 故事 / 项目入口：维克与光第一集试作、《向前》花滑分镜、云朵牧场日常、2107 未来档案试作。
5. 角色档案：维克、光、创作中。
6. 正在慢慢整理：角色设定、场景片段、视频更新。
7. 抖音主页入口。

联系方式：

- 目前只放抖音主页：`https://v.douyin.com/saZ9fQu8heA/`
- 用户不想公开邮箱，不要新增邮箱。

## 创作分支说明

### 维克与光

闪电十一人同人方向的原创角色记录。

- 男主：维克 / Victor，代表标志是 V。
- 女主：光 / Hikari。
- 调性：校园、球场、日常、陪伴、慢慢长出来的故事。
- 相关页面：`index.html`、`chapter-01.html`。

### 《向前》花滑分镜试作

一个关于 28 岁花滑选手疲惫、失误、调整、继续向前的 60 秒影像分镜练习。

- 相关页面：`forward.html`
- 图像资源：`assets/forward/`
- 这组已经比较轻，不是主要性能问题。

### 2107：未来档案试作

偏科幻、海报、系统编号、档案感的视觉实验。气质更冷，更设计感，和主页治愈风不同，所以做成独立项目页。

- 相关页面：`civitas-2107.html`
- 图像资源：`assets/2107/`
- 适合描述为“视觉实验 / 科幻海报 / 世界观未定稿”。

### 云朵牧场日常

偏手帐、童话、治愈视觉的分支。更贴合网站原本的可爱风格。

角色设定：

- 绵绵：绵云羊，云朵剪毛师。慢悠悠，工作认真。口头禅：「再修一点点。」
- 团团：仓鼠，云动力部实习。超认真，但没人确认它是不是真的在发电。口头禅：「慢慢来也会有云。」
- 晚晚：猫头鹰，夜班云管理员。温柔，规律，下班很准时。口头禅：「今晚应该不会下雨。」
- 夕夕：兔子，晚霞观察员 / 晚霞收集员。安静，不着急。口头禅：「今天有一点粉。」

相关页面：

- `cloud-ranch.html`
- 图像资源：`assets/cloud-ranch/`

## 已有交互

`script.js` 当前实现：

- 灯箱预览：带 `.lightbox-link` 的图片点击后弹出大图。
- 关闭灯箱：点关闭按钮、点背景、按 Escape。
- 滚动浮现：`.reveal` 和 `.text-reveal` 用 IntersectionObserver 加 `.is-visible`。
- 时间氛围：根据当前小时给 `body` 加 `time-morning / time-afternoon / time-evening / time-night`，并更新 `#timeNote` 文案。

样式中已有：

- 作品卡 hover：卡片上浮、阴影加深、图片轻微放大。
- 按钮 hover：上浮、变大、颜色变化。
- 故事入口卡 hover：整卡上浮、封面图放大。
- 2107 页面和云朵牧场页面都有图片点击放大。

用户曾经想尝试“卡片渐变流动 / 液体感 / 波纹感”，但实际效果不明显。不要贸然加很重的 canvas 或 WebGL 特效。用户后来认可：现在内容还在长出来，网站不应该比内容更用力。

## 这次用户的新目标

用户现在想“让网页更流畅”。下一位 Codex 应该优先理解为：

1. 图片加载更快。
2. 交互更顺滑。
3. 动画不要卡顿。
4. 页面不要因为大图太多而慢。
5. 保持当前治愈、个人创作记录风格，不要大改成炫技网站。

最可能的优化方向：

- 生成网页展示用的压缩图片，比如 JPG 或 WebP。
- 保留原图在用户自己的素材盘，不要把原图全部塞进网站仓库。
- 给 `<img>` 加 `loading="lazy"`，首屏关键图可保留默认加载。
- 给图片明确 `width` / `height` 或保持稳定 `aspect-ratio`，减少布局跳动。
- 减少首屏不必要的大图加载。
- 检查 CSS 动画是否只改变 `transform` / `opacity`，避免频繁触发布局。
- 对弹窗大图可继续用原图或较高质量图，但卡片缩略图最好用压缩版。

当前比较大的图片：

- `assets/chapter-01/*.png`：每张约 2.3MB 到 2.8MB。
- `assets/2107/*.png`：每张约 2.0MB 到 2.6MB。
- `assets/cloud-ranch/*.png`：每张约 2.1MB 到 2.8MB。
- `assets/hikari-solo.png`：约 2.4MB。
- `assets/rooftop-onigiri.png`、`assets/victor-solo.png`、`assets/studio-animals.png`：约 1.8MB 到 2MB。
- `assets/forward/*.jpg`：约 180KB 到 260KB，已经较轻。

重要：优化图片前先问用户是否可以生成压缩版图片，并说明“原图不删，只是网站用轻量版”。不要直接删除原图。

## 设计原则

用户偏好：

- 温柔、可爱、卡通动漫、治愈。
- 文案轻一点，像个人创作记录。
- 不喜欢太职业、太模板、太商业。
- 认可“练习作品 / 未定稿 / 创作记录，不是最终完成版”的表达。
- 内容少时不要硬撑很多区块，让页面松一点。
- 可以有交互，但不要抢作品。
- 背景音乐暂时不要加，因为 AI 音乐版权不确定。

不建议：

- 不要把网站改成正式设计师作品集。
- 不要公开邮箱。
- 不要加很重的炫技动画或复杂 canvas，除非用户明确要求。
- 不要随便删除旧素材或项目文件。
- 不要把视频文件、超大临时文件放入仓库。
- 不要把外部视频文件下载进项目。若展示视频，使用外部链接。

## Git 和上传经验

仓库远程：

```powershell
git remote -v
```

正常应显示：

```text
origin  https://github.com/juhao555/juhao555test2.git (fetch)
origin  https://github.com/juhao555/juhao555test2.git (push)
```

常用检查：

```powershell
git status --short --branch
git log --oneline -5
git remote -v
```

本项目之前遇到过 GitHub 推送网络问题。经验：

- `Test-NetConnection github.com -Port 443` 曾经一直显示 `TcpTestSucceeded: False`。
- 但后来直接执行 `git push` 成功了。
- 所以不要只看 443 测试结果。项目正常、有本地提交时，可以直接试一次 `git push`。
- 如果 `git status` 显示 `main...origin/main [ahead 1]`，说明本地比 GitHub 多一个提交，只差推送，项目没有坏。

推送前检查不要带入视频或超大文件：

```powershell
Get-ChildItem -Recurse -File | Where-Object { $_.Extension -match '\.(mp4|mov|avi|mkv)$' } | Select-Object FullName,Length
Get-ChildItem -Recurse -File | Where-Object { $_.Length -gt 10000000 } | Select-Object FullName,Length
```

如果需要提交：

```powershell
git add <files>
git commit -m "message"
git push
```

在 Codex 环境里，`git commit` 和 `git push` 通常需要用户批准。用户已知道“普通审核”弹窗，可以提示他确认。

## 浏览器预览注意

用户常直接打开本地文件：

```text
file:///C:/Users/juhao/Desktop/pet_care/index.html
```

有时 Codex 的 in-app browser 会因为 `file://` 策略阻止自动打开本地页面。不要强行绕过。如果需要预览，可以让用户自己刷新本地页面或打开对应 HTML 文件。

可给用户的本地链接：

- `C:\Users\juhao\Desktop\pet_care\index.html`
- `C:\Users\juhao\Desktop\pet_care\cloud-ranch.html`
- `C:\Users\juhao\Desktop\pet_care\civitas-2107.html`
- `C:\Users\juhao\Desktop\pet_care\chapter-01.html`
- `C:\Users\juhao\Desktop\pet_care\forward.html`

## 建议下一步任务拆分

如果用户说“让网页更流畅”，建议这样做：

1. 先检查当前文件体积和引用路径。
2. 和用户确认是否可以生成压缩图片版本。
3. 建议生成 `assets/optimized/` 或各目录内的 `*-web.jpg` / `*-web.webp`。
4. 首页卡片和列表优先引用压缩图。
5. 详情页可以根据体验决定：展示用压缩图，点击灯箱可以打开较高清图。
6. 给非首屏图片加 `loading="lazy"`。
7. 轻微调整 CSS 动画，避免过重效果。
8. 本地检查路径和 Git 状态。
9. 用户确认后再 commit / push。

## 当前 Git 状态

写入本交接文件前，仓库是干净的：

```text
## main...origin/main
```

最近提交：

```text
96849cc Add 2107 and cloud ranch projects
0e50a52 Add story reading pages
4df1469 Remove hero image decoration
7839052 Refine fan creation homepage
c0c1806 Move avatar into site header
```

本文件加入后会出现一个未提交改动，后续可以单独提交为：

```text
Add project handoff notes
```
