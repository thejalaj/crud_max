json.extract! patient, :id, :firstname, :lastname, :age, :dobb, :gender, :phone, :free_text, :created_at, :updated_at
json.url patient_url(patient, format: :json)
