default_run_options[:pty] = true
ssh_options[:port] = 2020
set :application, "wsc"
set :repository,  "git@github.com:revol-tech/WSC.git"
set :use_sudo, false  #permission conflict resolve
set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :deploy_to, "/home/deploy/www/wscl.com.np"

role :web, "wscl.com.np"                          # Your HTTP server, Apache/etc
role :app, "wscl.com.np"                          # This may be the same as your `Web` server
role :db,  "wscl.com.np", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

set :user, "deploy"
set :scm_username, 'revol-tech'
set :bundle_gemfile,  "Gemfile"
  set :bundle_dir,""
  set :bundle_flags,""
  set :bundle_without,      [:development, :test]
require "bundler/capistrano"

# Add RVM's lib directory to the load path.
$:.unshift(File.expand_path('./lib', ENV['rvm_path']))

# Load RVM's capistrano plugin.
require "rvm/capistrano"

set :rvm_ruby_string, '1.9.3'
#set :rvm_type, :user  # Don't use system-wide RVM
load 'deploy/assets'

#db migrate
after "deploy", "deploy:migrate"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end
