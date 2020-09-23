#Abrir el archivo .ch 

reserved_words = ['cargue','almacene','nueva','lea','sume','reste','multiplique','divida','potencia','modulo','concatene','elimine','extraiga','y','o','no','muestre','imprima','vaya','vayasi','etiqueta','retorne','xxx','//']
nueva_dictionary = {'nueva':['c','i','r','l']}
uninitialized_variables = {'c':' ','i':0,'r':0,'l':0}
variables_dictionary = {}

def validate_type(type,value):
	try:
		type(value)
		validate = True
	except ValueError:
		validate = False
	return validate

def character_type(type,value):
	if type == 'c':
		return str(value)
	elif type == 'i':
		return int(value) if validate_type(int,value) else None
	elif type == 'r':
		return float(value) if validate_type(float,value) else None
	elif type == 'l':
		return bool(int(value)) if validate_type(bool,int(value)) else None
	else:
		return None

path = 'ch/intento.ch'
file_ch = open(path,'r')

for line in file_ch:
	line_ = line.rstrip().split(' ')
	if line_[0].lower() in reserved_words:
		if line_[0].lower() == 'nueva':
			if line_[2].lower() in nueva_dictionary['nueva']:
				try :
					line_[3] = line_[3]
				except IndexError:
					line_.append(uninitialized_variables.get(line_[2].lower()))
				if character_type(line_[2].lower(),line_[3]) != None:
					variables_dictionary[line_[1].lower()] = character_type(line_[2].lower(),line_[3])
				else:
					print('Type error')
			else: 
				print('Existe un error con el tipo de carcater: ', line_[2])
		print(line_)
	else:
		print('Existe un error de sintaxis con la palabra reservada: ', line_[0])
		break

print(variables_dictionary)