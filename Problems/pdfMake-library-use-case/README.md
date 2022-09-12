
/**
 *  Custom Generate Pdf
 */

/** case 1 basic*
 {
  content: [
    'First paragraph',
    'Second paragraph'
  ]
}
 */

/** case 2 style*
 {
  content: [
   	{
			text: 'This is a header, using header style',
			style: 'header'
		}
  ],
  	styles: {
		header: {
			fontSize: 18,
			bold: true
		},
			header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		},
			superMargin: {
			margin: [20, 0, 40, 0],
			fontSize: 15
		}
	}
}
 */

/** case 3 style*
 {
  content: [
   	{
			text: [
				'one',
				'two',
				{text: 'a better ', fontSize: 15, bold: true, italics: true},
			]
		},
  ],
  	italics: false,
  	alignment: 'center'
  	bold: false,
    alignment: 'justify',
    decoration: string: the text decoration to apply (‘underline’ or ‘lineThrough’ or ‘overline’)
decorationStyle: string: the style of the text decoration (‘dashed’ or ‘dotted’ or ‘double’ or ‘wavy’)
decorationColor: string: the color of the text decoration, see color
    defaultStyle: {
		columnGap: 20
	}
	style: [ 'header', 'anotherStyle' ]
	 defaultStyle: {
        font: 'Roboto'
      }
}
 */
/** case 4 column *
 {
  content: [
   	{
			alignment: 'justify',
			columns: [
				{
				text: 'hello'
				},
				{
				text: 'hello'
				}
			]
		},
			{
			columns: [
				{
				width: 90,
				fontSize: 9,
				text: 'hello'
				},
				{
				width: '*',
				style: 'header',
				text: 'hello'
				},
					{
				width: 'auto',
				text: 'hello'
				}
			]
		},
  ]
}
 */
/** case 5 table *
 {
  content: [
   	{
			style: 'tableExample',
			table: {
				widths: ['*', 200, 'auto'],
				heights: [20, 50, 70],
				headerRows: 2,
				layout: 'noBorders',
				layout: 'headerLineOnly',
				layout: 'lightHorizontalLines',
				fillColor: 'red',
				fillOpacity: '0.2',
					border: [false, true, false, false],
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
  ]
}
 */
/** case 6 list *
 {
  content: [
    	{
			ul: [
				'item 1',
				'item 2',
				'item 3'
			]
		},
			{
			reversed: true,
			start: 50,
			type: 'square',
			type: 'circle',
			color: 'blue',
			markerColor: 'red',
			type: 'lower-alpha',
			type: 'upper-roman',
			type: 'lower-roman',
			type: 'none',
			separator: ')',
			separator: ['(', ')'],
			ol: [
				'item 1',
				'item 2',
				'item 3'
			]
		},
  ]
}
 */
/** case 7 image *
 {
  content: [
    	{
			image: 'sampleImage.jpg',
				width: 150,
			height: 150,
			fit: [100, 100],
			pageBreak: 'after'
		},
			{
			image: 'building',
			width: 200
		},
			{
			image: 'sample.jpg',
			width: 150,
			opacity: 0.5
		},
  ],
  	images: {
  	building: 'data:image/jpeg;base64,'
	}
}
 */
/** case 8 Qr code *
 content: [
 // basic usage
 { qr: 'text in QR' },

 // colored QR
 { qr: 'text in QR', foreground: 'red', background: 'yellow' },

 // resized QR
 { qr: 'text in QR', fit: '500' },
 ]
 */
/** case 9 Water Mark *
 watermark: { text: 'test watermark', color: 'blue', opacity: 0.3, bold: true, italics: false },
 watermark: 'test watermark',
 watermark: { text: 'test watermark', fontSize: 20 },
 watermark: { text: 'test watermark', angle: 70 },
 */
/** case 10 PAGE DIMENSIONS, ORIENTATION AND MARGINS *
 pageSize: 'A5', (4A0, '2A0', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',), (B0- B10), (C0-C10), ('EXECUTIVE', 'FOLIO', 'LEGAL', 'LETTER', 'TABLOID')
 pageOrientation: 'landscape' // portrait(by default)
 pageMargins: [ 40, 60, 40, 60 ],
 pageBreak: 'before' // 'after'

 */
/** Dynamically control page breaks, *
 dd = {
    content: [
       {text: '1 Headline', headlineLevel: 1},
       'Some long text of variable length ...',
       {text: '2 Headline', headlineLevel: 1},
       'Some long text of variable length ...',
       {text: '3 Headline', headlineLevel: 1},
       'Some long text of variable length ...',
    ],
  pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
     return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
  }
}
 */
/** Object keys *
 {
 id, headlineLevel, text, ul, ol, table, image, qr, canvas, style, pageOrientation, pageNumbers, pages, stack,  startPosition: {
     pageNumber: 2, // the page this node starts on
     pageOrientation: 'landscape', // the orientation of this page
     left: 60, // the left position
     right: 60, // the right position
     verticalRatio: 0.2, // the ratio of space used vertically in this document (excluding margins)
     horizontalRatio: 0.0  // the ratio of space used horizontally in this document (excluding margins)
   }
 }
 */

/** Meta Data *
 var docDefinition = {
  info: {
	title: 'awesome Document',
	author: 'author name',
	subject: 'subject of document',
	keywords: 'keywords for document',
	creator: '',
	producer: '',
	creationDate: '',
	modDate: ''
	trapped: ''
  },
  }
 */
/** compress *
 compress: false, (default true)
 */
/** ENCRYPTION AND ACCESS PRIVILEGES
 var docDefinition = {
  userPassword: '123',
  ownerPassword: '123456',
  permissions: {
    printing: 'highResolution', //'lowResolution'
    modifying: false,
    copying: false,
    annotating: true,
    fillingForms: true,
    contentAccessibility: true,
    documentAssembly: true
  },
  }
 *
 */
/** font import
 pdfMake.fonts = {
   yourFontName: {
     normal: 'https://example.com/fonts/fontFile.ttf',
     bold: 'https://example.com/fonts/fontFile2.ttf',
     italics: 'https://example.com/fonts/fontFile3.ttf',
     bolditalics: 'https://example.com/fonts/fontFile4.ttf'
   },
   }
 and use
 var docDefinition = {
  defaultStyle: {
    font: 'yourFontName'
  }
}
 */

