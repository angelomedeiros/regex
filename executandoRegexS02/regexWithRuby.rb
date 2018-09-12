texto =  '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

regexNove = Regexp::new('9')
puts regexNove.match(texto) # 9

regexNove = %r{9}
puts regexNove.match(texto) # 9

p regexNove =~ '894' # 1

regexNove = /[a-f]/
p texto.scan(regexNove) # ["a", "b", "c", "d", "e", "f"]
p texto.scan(regexNove).join() # "abcdef"
p texto.split(/,/) # ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
p texto.split(/[aeiou]/) # ["0,1,2,3,4,5,6,7,8,9,", ",b,c,d,", ",f"]