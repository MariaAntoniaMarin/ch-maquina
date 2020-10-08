reserved_words = ['cargue','almacene','nueva','lea','sume','reste','multiplique','divida','potencia','modulo','concatene','elimine','extraiga','y','o','no','muestre','imprima','vaya','vayasi','etiqueta','retorne','xxx','//']
nueva_dictionary = {'nueva':['c','i','r','l']}
uninitialized_variables = {'c':' ','i':0,'r':0,'l':0}
items_list = []
variables_list = []
instruction_list = []
label_list = []

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

#Abrir archivo .ch 
def open_file_ch(path):
	file_ch = open(path,'r')
	file_list = open(path,'r').readlines()
	for line,j in zip(file_ch,range(len(file_list))):
		line_ = line.rstrip().split(' ')
		if line_[0].lower() in reserved_words:
			if line_[0].lower() == 'nueva':
				if line_[2].lower() in nueva_dictionary['nueva']:
					try :
						line_[3] = line_[3]
					except IndexError:
						line_.append(uninitialized_variables.get(line_[2].lower()))
					if character_type(line_[2].lower(),line_[3]) != None:
						var_dict = {'name':line_[1].lower(),'value':character_type(line_[2].lower(),line_[3])}
						variables_list.append(var_dict)
					else:
						print('Type error')
				else: 
					print('Existe un error con el tipo de carcater: ', line_[2])
			elif line_[0].lower() == 'etiqueta':
				label_dict = {'name':line_[1].lower(),'pos':line_[2].rjust(5,'0')}
				label_list.append(label_dict)
			elif line_[0].lower() not in ['etiqueta','//']:
				inst_dict = {'Pos':str(j).rjust(5,'0'),'Instruccion':line.rstrip()}
				instruction_list.append(inst_dict)
			line_dict = {'Pos':str(j).rjust(5,'0'),'Instruccion':line.rstrip()}
			items_list.append(line_dict)
		else:
			print('Existe un error de sintaxis con la palabra reservada: ', line_[0])
			break
	file_ch.close()
	file_list.close()
	return {'content': items_list,'variables':variables_list,'instructions':instruction_list,'labels':label_list}