<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
@else
<div class="head">
{{ $slot }}
</div>
@endif
</a>
</td>
</tr>
