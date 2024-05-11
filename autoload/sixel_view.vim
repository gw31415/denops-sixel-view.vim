let s:echoraw = has('nvim')
			\ ? {str->chansend(v:stderr, str)}
			\ : {str->echoraw(str)}

function sixel_view#clear() abort
	exec "norm! \<C-l>"
endfunction

function sixel_view#view_sixel(sixel, lnum, cnum) abort
	call s:echoraw("\x1b[s")
	call s:echoraw("\x1b[" . a:lnum . ";" . a:cnum . "H" . a:sixel)
	call s:echoraw("\x1b[u")
endfunction

function sixel_view#view(source, opts, lnum, cnum) abort
	let sixel = denops#request('sixel_view', 'img2sixel', [a:source, a:opts])
	call sixel_view#view_sixel(sixel['data'], a:lnum, a:cnum)
endfunction
