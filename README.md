# 第一步：在 philosophers-index.js 末尾添加索引条目
在最后一个 }, 和 ]; 之间插入新记录：
js  // ── 新思想家姓名 ──────────────────────────
  {
    id: "Burke",                          // 唯一id，英文，和第二步保持一致
    lastName: "B",                        // 英文名首字母，用于侧边栏分组
    nameCN: "埃德蒙·伯克",
    nameEN: "Edmund Burke",
    years: "1729–1797",
    century: "18世纪",
    tradition: "英国保守主义",
    photo: "images/portraits/burke.jpg",  // 无图片填 null
    bio: `一句话简介，可以用中文弯引号"自由"不会报错`,
    works: [
      { year: "1790", titleEN: "Reflections on the Revolution in France", titleCN: "法国大革命反思录", note: "保守主义政治哲学的奠基之作", file: null },
    ]
  },
注意 bio 字段用反引号 ` 而不是双引号，这样内容里有任何引号都不会出错。

# 第二步：在 thinker-detail.js 末尾添加详情内容
在最后一个 }, 和 }; 之间插入：
js  // ── 埃德蒙·伯克 ──────────────────────────
  Burke: {                                // 和第一步的 id 完全一致
    bio:
`第一段生平内容。

第二段，空一行即可分段，支持任意长度。`,

    contribution:
`思想贡献第一条标题
正文内容...

思想贡献第二条标题
正文内容...`,
  },

# 注意事项 要点说明
1. id 必须一致两个文件的 id / 键名完全相同，否则详情页显示"资料整理中..."
2. 用反引号 `bio、bioDetail、长文本字段都用反引号，避免中文引号引发语法错误
3. 照片放对位置图片放在 images/portraits/ 文件夹下，photo 填相对路径
4. 著作有文件可下载file 填相对路径如 "files/burke_reflections.pdf"，无文件填 null
5. 添加完保存即生效Live Server 会自动刷新，无需重启NO SCRIPTS
